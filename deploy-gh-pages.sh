#!/bin/bash

set -e  # Exit on error

echo "📦 Building the project..."
npm run build

echo "🚚 Deploying to GitHub Pages..."

# Store current branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Use a temporary directory to avoid messing with your working tree
TEMP_DIR=$(mktemp -d)

# Copy build output
cp -r dist/* "$TEMP_DIR"
cp -r game "$TEMP_DIR/WouldYouRatherGame"

# Checkout gh-pages branch (create if it doesn't exist)
git fetch origin gh-pages || true
git worktree add -B gh-pages "$TEMP_DIR" origin/gh-pages

cd "$TEMP_DIR"
#git config user.name "Your Name"
#git config user.email "you@example.com"

# Commit and push
git add --all
git commit -m "🚀 Deploy from $BRANCH at $(date)"
git push origin gh-pages --force

# Clean up
cd ..
git worktree remove "$TEMP_DIR"

echo "✅ Deployed to GitHub Pages!"