#!/bin/bash

CI=true

yarn test

yarn build

aws s3 sync build/ s3://bto.tae.io/
