#!/bin/bash

# Use fzf to select a file with .test.tsx extension
file=$(find . -type f -name "*.test.tsx" | fzf)

# Exit if no file was selected
if [[ -z "$file" ]]; then
  echo "No file selected."
  exit 1
fi

extra_flags=()

# Print the full selected file path
echo "Selected test file: $file"

extra_flags+=("--read" "$file")
extra_flags+=("--read" "guidelines.md")

# Remove .test.tsx and replace it with .tsx
modified_file="${file%.test.tsx}.tsx"

# Print the modified file name
echo "Implementation file: $modified_file"

extra_flags+=("--write" "$modified_file")

aider --model gemini -m "Implement the code following for the test included in the context and make sure to follow the guidelines provided." "${extra_flags[@]}"
