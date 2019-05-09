#!/bin/bash

aws s3 cp --acl public-read --recursive src/ s3://public.adyoulike.com/QA/
