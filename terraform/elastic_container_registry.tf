resource "aws_ecr_repository" "my_repo" {
  name = "my-backend-app"
}

output "repository_url" {
  value = aws_ecr_repository.my_repo.repository_url
}
