---
layout: "post.njk"
title: '{Talk} Python com Arduino'
tags: ['workshop', 'python', 'talk', 'pyladies']
featuredImage: /_images/workshop-930x534.png
permalink: talks-contents/python-com-arduino/
date: 2021-10-27
description: Experiência prática sobre Python e Arduino
---

<iframe width="100%" height="500vh" src="https://www.youtube.com/embed/a1TyTHMpHI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Segue os códigos abaixo aprensetado no workshop:

## Código do LDR Arduino

```c++
int ldrPin = 0; //LDR no pino analígico 0
int ldrValor = 0; //Valor lido do LDR
 
void setup() {
 Serial.begin(9600); //Inicia a comunicação serial
}
 
void loop() {
 ///ler o valor do LDR
 ldrValor = analogRead(ldrPin); //O valor lido será entre 0 e 1023

 //imprime o valor lido do LDR no monitor serial
 Serial.println(ldrValor);
 delay(100);
}
```

## Código do LDR Python

```python
#!/usr/bin/python
# -*- coding: iso-8859-1 -*-
 
import serial #importacao do modulo serial
ser = serial.Serial('COM3') #abre porta serial COM*
while True:
   leitura = ser.readline() #le caracteres recebidos
   if leitura >= "100":
            print "alta luminosidade no local"       
   else:
            print "luminosidade muito baixa"   
ser.close()
```

## Código do LED Arduino

```c
int led1 = 13; // Porta onde o led será inserido


void setup(){
  Serial.begin(9600); // Velocidade padrão do Uno
  pinMode(led1, OUTPUT); // Porta onde o led será inserido, configurado como saida
}
void loop(){
  char leitura = Serial.read(); // Variavel que receberá os valores enviados pelo programa em python
  if(leitura == '1'){
    digitalWrite(led1, HIGH); // Liga a porta 13 se o valor recebido for 1
  }
  else if(leitura == '2'){
    digitalWrite(led1, LOW); // Desliga a porta 13 se o valor recebido for 2
  }
}
```

## Código do LED Python

```python
#!/usr/bin/env/python
# -*- coding: cp1252 -*-

import serial
import time
conexao = serial.Serial('COM3', 9600) # Configuração da conexão

def pisca(tempo=1):
    while True:
        valor = input("digite o valor 1 ==> ligado, 2 ==> desligado, 3 ==> sair: ")
        if valor == 1:
            conexao.write('1') # Escreve 1 no arduino (LED acende)
            print "ligado"
            time.sleep(tempo) # Aguarda n segundos
        elif valor == 2:
            conexao.write('2') # Escreve 2 no arduino (LED apaga)
            print "desligado"
            time.sleep(tempo) # Aguarda n segundos
        else:
            exit();
if __name__ == '__main__': # Executa a função
    pisca()
```