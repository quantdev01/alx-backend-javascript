#!/usr/bin/env bash

# This script will create files like main files from alx(0-main.js)
# With a given extension
# Usage : 
# ./create from_number to_number extension_type
# Example
# ./create 0 2 .js -> will create 0-main.js, 1-main.js and 2-main.js

for (( i = $1; i <= $2; i++ ))
do
	touch "$i-main$3"
done

