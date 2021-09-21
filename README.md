# :floppy_disk: Servidor para Upload de Arquivos

## `1º` **|** Introdução:

Esse é uma API bem simples para realizar Upload de arquivos de imagem, estava querendo entender melhor sobre como funciona alguns sistemas de Upload de arquivos e tentar aplicar em um projeto usando Node.js.

Usei o Multer para realizar a manipulação dos arquivos enviados na requisição.

Nessa API você deverá enviar apenas 1 imagem a cada requisição, ela será salva em uma pasta temporária e terá um Hash único para não ter o nome igual a outras futuras imagens.

## `2º` **|** Rota para Upload:

```json
{
	"sendFile": {
		"router": "/posts",
		"method": "POST",
		"type": "Single File",
		"request": {
			"file": "You File"
		}
	}
}
```