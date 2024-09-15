# Launch EC2 instances
resource "aws_instance" "app" {
  ami           = "ami-12345678" # Choose a free-tier AMI (e.g., Ubuntu 20.04)
  instance_type = "t2.micro"
  key_name      = aws_key_pair.deployer.key_name
  security_groups = [aws_security_group.allow_http.name]

  user_data = <<-EOF
    #!/bin/bash
    sudo apt-get update -y
    sudo apt-get install docker.io -y
    sudo docker run -p 80:3001 your-docker-image
  EOF

  tags = {
    Name = "BackendAppInstance"
  }
}