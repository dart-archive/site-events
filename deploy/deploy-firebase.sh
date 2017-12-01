#!/usr/bin/env bash

echo "================ Deploy to Firebase ========================"
firebase deploy --token "${FIREBASE_TOKEN}" --non-interactive
