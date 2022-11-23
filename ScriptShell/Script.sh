#!/bin/bash
sudo passwd ubuntu
sudo apt update && sudo apt upgrade
sudo apt-get install xrdp lxde-core lxde tigervnc-standalone-server -y

sudo apt install docker.io -y
sudo docker mysql:5.7
sudo systemctl start docker
sudo docker run -d -p 3306:3306 --name dyoung -e "MYSQL_DATABASE=dyoung"-e"MYSQL_ROOT_PASSWORD=#Gfgrupo6" mysql:5.7
sudo docker exec -it dyoung bash
mysql -u root -p
#Gfgrupo6

java -version
if [ $? -eq 0 ];
then
echo “java instalado”
else
echo “java nao instalado”
echo “gostaria de instalar o java? (s/n)”
read inst
if [ \”$inst\” == \”s\” ];
then
sudo apt install default-jre -y
fi
fi