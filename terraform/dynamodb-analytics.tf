resource "aws_dynamodb_table" "analytics" {
  name         = "analytics"
  billing_mode = "PAY_PER_REQUEST" 

  attribute {
    name = "PK"
    type = "S"
  }

  attribute {
    name = "SK"
    type = "S"
  }

  hash_key  = "PK"
  range_key = "SK"


  tags = {
    Name = "analytics"
  }
}
