# Shell script to run tests in a Node.js project using Jest.
# If no tests are defined, the script will exit with a message.
# This is so that the CI/CD pipeline does not fail when no tests are defined.

if [ -z "$(find src -name '*.test.js')" ]; then
  echo "No tests defined"
  exit 0
else
  jest
fi

chmod +x run-tests.sh