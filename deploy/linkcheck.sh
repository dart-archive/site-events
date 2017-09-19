#!/usr/bin/env bash

firebase serve --port 4321 --token "${FIREBASE_TOKEN}" & fb_pid=$!
sleep 10
linkcheck :4321 --no-nice
exitcode=$?
kill $fb_pid
exit $exitcode
