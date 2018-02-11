@echo off


del /f /q socat.txt

echo SOCAT LOG>>socat.txt
echo --------->>socat.txt
echo.>>socat.txt

socat -u udp-recv:18194 OPEN:socat.txt