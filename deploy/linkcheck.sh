#!/usr/bin/env bash

firebase --token "${FIREBASE_TOKEN}" serve --port 4321 & fb_pid=$!
sleep 10
linkcheck :4321 --no-nice
exitcode=$?
kill $fb_pid
exit $exitcode
