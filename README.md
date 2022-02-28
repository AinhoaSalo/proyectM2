# Notas
> ESTO SIRVE PARA HACER QUE EL USUARIO SEA UNICO.

Hay que introducirlo en la base de datos. (yo lo he metido desde la terminal PowerShell)
Para conectarnos desde PowerShell a la base de datos Mongodb Atlas: mongo 

```
"mongodb+srv://AinhoaSalo:S8RR1i3Psw5P5ggt@zaragoza.bjkqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
```

```
db.register.createIndex(
  {
      "nameUserRegister": 1
  },
  {
      unique: true
  }
)
```

- 
*
+
