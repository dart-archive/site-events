#!/usr/bin/env bash

superstatic --port 4321 & serve_pid=$!
sleep 10
linkcheck :4321 --no-nice
exitcode=$?
kill $serve_pid
exit $exitcode
