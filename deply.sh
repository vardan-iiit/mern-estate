echo "building app.."
npm run build



echo "deploying app.."
scp -r client/dist/* vardan@192.168.3.8:/var/www/192.168.3.8/