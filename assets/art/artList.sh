#! /bin/bash 

/bin/ls | grep -- "-thumb" | jc --ls | jq "{ listoffiles: [.[] | .filename ] }" > thumbnails.json