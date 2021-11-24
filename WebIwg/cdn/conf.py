import os

AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME='proyectocertamen'
AWS_S3_ENDPOINT_URL="htpps://nyc3.digitaloceanspaces.com"
AWS_S3_OBJECT_PARAMETERS = {
    "CacheControl": "max-age=86400",
}

AWS_LOCATION = "htpps://proyectocertamen.nyc3.digitaloceanspaces.com"


DEFAULT_FILE_STORAGE = "WebIwg.cdn.backends.MediaRootS3BotoStorage"
STATICFILES_STORAGE = "WebIwg.cdn.backends.StaticRootS3BotoStorage"