rm -rf build/
npm run build
cd build/
cp ../package.json .
npm install --omit=dev
zip -r comment.zip .
aws lambda update-function-code --function-name cherry-comment --zip-file fileb://comment.zip > /dev/null 2>&1
echo "Done!"
