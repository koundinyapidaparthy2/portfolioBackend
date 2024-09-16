# Auto Scaling Group
resource "aws_autoscaling_group" "asg" {
  min_size             = 1
  max_size             = 2
  desired_capacity     = 1
  vpc_zone_identifier  = aws_subnet.public.*.id
  target_group_arns    = [aws_lb_target_group.app_tg.arn]
  launch_configuration = aws_launch_configuration.app_lc.id
}

# Auto-scaling launch configuration
resource "aws_launch_configuration" "app_lc" {
  image_id        = "ami-12345678" # Free-tier eligible
  instance_type   = "t2.micro"
  key_name        = var.instance_key_name
  security_groups = [aws_security_group.allow_http.name]

  user_data = <<-EOF
    #!/bin/bash
    sudo apt-get update -y
    sudo apt-get install docker.io -y
    sudo docker run -p 80:3001 your-docker-image
  EOF
}


# Define auto-scaling policies within Terraform that will work within the free tier:

resource "aws_autoscaling_policy" "scale_up" {
  name                   = "scale_up"
  scaling_adjustment      = 1
  adjustment_type         = "ChangeInCapacity"
  cooldown                = 300
  autoscaling_group_name  = aws_autoscaling_group.asg.name
}

resource "aws_autoscaling_policy" "scale_down" {
  name                   = "scale_down"
  scaling_adjustment      = -1
  adjustment_type         = "ChangeInCapacity"
  cooldown                = 300
  autoscaling_group_name  = aws_autoscaling_group.asg.name
}
