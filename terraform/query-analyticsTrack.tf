# Lambda Function
resource "aws_lambda_function" "appsync_lambda" {
  function_name = "AppSyncLambdaFunction"
  filename         = "lambda.zip"
  handler          = "index.handler"
  runtime          = "nodejs20.x"
  role             = var.lambda_role_arn

  source_code_hash = filebase64sha256("lambda.zip")
}

# AppSync API
resource "aws_appsync_graphql_api" "api" {
  name                 = "AppSyncApi"
  authentication_type  = "API_KEY"

  schema = <<GRAPHQL
  type Query {
    hello: String
  }
  GRAPHQL
}

# AppSync Data Source
resource "aws_appsync_data_source" "lambda_ds" {
  api_id = aws_appsync_graphql_api.api.id
  name   = "LambdaDataSource"
  type   = "AWS_LAMBDA"

  lambda_config {
    function_arn = aws_lambda_function.appsync_lambda.arn
  }

  service_role_arn = var.lambda_role_arn
}

# AppSync Resolver
resource "aws_appsync_resolver" "query_hello" {
  api_id        = aws_appsync_graphql_api.api.id
  type          = "Query"
  field         = "hello"
  data_source   = aws_appsync_data_source.lambda_ds.name
  request_mapping_template = <<VTL
  {
    "version": "2018-05-29",
    "operation": "Invoke",
    "payload": {}
  }
  VTL
  response_mapping_template = <<VTL
  $util.toJson($context.result)
  VTL
}
