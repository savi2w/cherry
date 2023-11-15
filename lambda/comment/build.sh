rm -rf build/
npm run build
cd build/
cp ../package.json .
npm install --omit=dev
zip -r comment.zip .
