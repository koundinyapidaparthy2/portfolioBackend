resource "aws_s3_bucket" "kp_portfolio_assets_bucket" {
  bucket = "kp-portfolio-assets-unique"

}

resource "aws_s3_bucket_public_access_block" "public_access_block" {
  bucket = aws_s3_bucket.kp_portfolio_assets_bucket.id

  block_public_acls   = false
  ignore_public_acls   = false
  block_public_policy  = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "public_read_policy" {
  bucket = aws_s3_bucket.kp_portfolio_assets_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid    = "PublicReadAccess"
        Effect = "Allow"
        Principal = "*"
        Action = "s3:GetObject"
        Resource = "${aws_s3_bucket.kp_portfolio_assets_bucket.arn}/*"
      }
    ]
  })
}
