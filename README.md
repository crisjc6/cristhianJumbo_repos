## Ejercicio 1

**Criterios de aceptación**
• Escenario 
1: Consultar servicio simulado:
Dado que quiero obtener los códigos de verificación de mis repositorios 
Cuando hago una petición tipo GET al servicio simulado
Entonces se debe retornar los identificadores de los repositorios con su código de verificación

**Resultado**


![image](https://user-images.githubusercontent.com/50051312/178039081-00e80b0f-70c2-4a11-aec5-2ba3dcdf8b1f.png)


## Ejercicio 2

**Criterios de aceptación**

**Escenario 1:** 
Crear organización:
Dado que envío los datos de una organización
Cuando consumo el servicio de creación
Entonces se debe crear la organización

**Resultado**
![image](https://user-images.githubusercontent.com/50051312/178061763-373e3cab-01c2-46a7-a532-fd5dd7ff0a1f.png)


**Escenario 2:** 
Editar organización
Dado que modifico los datos de una organización
Cuando consumo el servicio de actualización
Entonces se debe actualizar la organización

![image](https://user-images.githubusercontent.com/50051312/178063030-b001cd11-7338-4353-9e8f-8379c644f343.png)

**Escenario 3:**
 Obtener organizaciones
Dado que quiero obtener una lista de organizaciones
Cuando consumo servicio para obtener organizaciones
Entonces se debe obtener un listado de organizaciones
![image](https://user-images.githubusercontent.com/50051312/178063204-99e20fa7-6363-41d0-adb6-7b08eced9387.png)

**Escenario 4:** 
Eliminar organizaciones
Dado que quiero eliminar una organización
Cuando consumo servicio para eliminar una organización
Entonces se debe obtener un listado de organizaciones

![image](https://user-images.githubusercontent.com/50051312/178063358-022863b3-b4af-4ec1-8086-455d2d8e4641.png)
![image](https://user-images.githubusercontent.com/50051312/178063384-486de699-3859-4e2f-9f41-eada9b5c9181.png)

## Ejercicio 3

**Escenario 1:** 
Obtener métricas de repositorios por tribu:
Dado que envío el identificador de una tribu
Cuando consumo el servicio para obtener los repositorios
Entonces me retornará el detalle de las métricas de los repositorios creados este año
Y que se encuentren habilitados (state: ENABLE)
Y que su cobertura sea superior a 75%

![image](https://user-images.githubusercontent.com/50051312/178526641-3c162d8e-d409-4e2c-b552-a32ccde6e25d.png)


**Escenario 2:** 
Tribu inexistente.
Dado que envío el identificador de una tribu
Cuando consumo el servicio para obtener los repositorios y la tribu no existe
Entonces me retornará el siguiente error: 'La Tribu no se encuentra registrada'

![image](https://user-images.githubusercontent.com/50051312/178510091-1c545d9d-9fa6-485b-8bfb-cc3905105c29.png)


**Escenario 3:**
 Información de verificación.
Dado que envío el identificador de una tribu
Cuando consumo el servicio para obtener los repositorios
Y obtengo el estado de verificación de los repositorios desde API Simulada (mock)
Entonces me retornará una etiqueta en la respuesta indicando un texto en lenguaje natural del 
estado de verificación actual de cada repositorio

![image](https://user-images.githubusercontent.com/50051312/178510406-9bc2250d-7321-44e9-9b85-475d3dc46197.png)


**Escenario 4:** Tribu no tiene repositorios que cumplan con la cobertura.
Dado que envío el identificador de una tribu
Cuando consumo el servicio para obtener los repositorios
Y la tribu no tiene repositorios que cumplan con el 75% de cobertura
Entonces me retornará el siguiente error: 'La Tribu no tiene repositorios que cumplan con la 
cobertura necesaria'

![image](https://user-images.githubusercontent.com/50051312/178526818-6c178795-e952-453f-b498-a7cacf59eab6.png)


## Ejercicio 4

**Escenario 1:** Generar reporte
Dado que envío el identificador de una tribu
Cuando consumo el servicio para generar el reporte de métricas de repositorios
Entonces me retornará un archivo .csv con el detalle de la consulta elaborada en el ejercicio 
número 3, donde cada atributo se representa como una columna.

![image](https://user-images.githubusercontent.com/50051312/178527288-cecc7f8f-8eaa-4a94-877c-c73d897eec62.png)

![image](https://user-images.githubusercontent.com/50051312/178527449-30924188-50c1-43e5-966e-86a870e86de6.png)
