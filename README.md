# Agrinho---2026-2
Aqui está o manual do seu jogo, estruturado e explicado bloco por bloco de código, mantendo o padrão apenas com escrita detalhada para cada parte:

Parte Um: As Variáveis Globais
Este bloco fica no topo do programa. Ele declara as variáveis que armazenam as informações que mudam ao longo do jogo e que precisam ser acessadas por qualquer outra parte do código.

let player; → Reserva um espaço na memória para guardar o objeto do jogador (o trator).

let items = []; → Cria uma lista vazia para armazenar todos os itens que estão caindo simultaneamente na tela.

let score = 0; → Define a variável de pontuação, iniciando o jogo com zero pontos.

let gameOver = false; → Define uma variável de controle que começa como falsa e mudará para verdadeira quando o jogador perder.

let itemImages = {}; → Cria um objeto vazio que serviria para carregar imagens externas, mas que não foi utilizado já que o jogo usa caracteres de texto.

Parte Dois: A Função de Configuração Inicial
O bloco da função setup é executado apenas uma vez, no momento exato em que o programa é iniciado.

createCanvas(800, 450); → Define a área visível do jogo com oitocentos pixels de largura por quatrocentos e cinquenta pixels de altura.

player = new Player(); → Instancia a classe do jogador, criando o personagem principal dentro da tela com suas configurações iniciais.

Parte Três: O Fluxo Principal do Jogo
O bloco da função draw funciona como um loop que roda continuamente, atualizando o que é mostrado na tela sessenta vezes por segundo.

background(135, 206, 235); → Limpa a tela a cada quadro, pintando o fundo de azul celeste.

drawGround(); → Chama a função externa que desenha o chão e a plantação.

if (!gameOver) → Verifica se o jogo ainda está rodando para executar a lógica de movimentação, criação de itens, checagem de colisões e atualização da pontuação na tela.

if (frameCount % 60 === 0) → Conta os quadros do jogo e, a cada sessenta quadros (um segundo), adiciona um novo objeto da classe Item dentro da lista de itens.

for (let i = items.length - 1; i >= 0; i--) → Varre a lista de itens de trás para frente para atualizar a posição de cada um deles e desenhá-los na tela.

if (items[i].hits(player)) → Testa se o item atual colidiu com o trator. Se colidiu e for sustentável, adiciona dez pontos; se for poluente, retira quinze pontos. Em seguida, remove o item da lista.

else if (items[i].y > height) → Testa se o item passou direto pelo jogador e saiu pela borda inferior da tela, removendo-o da lista para liberar a memória do computador.

if (score < -30) → Checa se a pontuação caiu abaixo de menos trinta. Se isso acontecer, muda a variável de controle para verdadeiro, interrompendo a partida.

else (do fim de jogo) → Se a variável de controle for verdadeira, desenha um retângulo preto transparente sobre a tela e escreve os textos de fim de jogo e a pontuação final centralizados.

Parte Quatro: O Desenho do Cenário
Este bloco é uma função de suporte que organiza os elementos gráficos do fundo do jogo.

rect(0, 350, width, 100); → Desenha um grande retângulo verde claro na parte inferior da tela para representar o solo.

for(let i=0;i<width;i+=80) → Uma estrutura de repetição que caminha de oitenta em oitenta pixels ao longo da largura da tela, desenhando pequenos retângulos verdes escuros para simular as fileiras de plantação.

Parte Cinco: O Gerenciamento do Teclado
Estes dois blocos de funções controlam a interatividade através das teclas de setas do teclado.

keyPressed() → Detecta quando uma tecla é pressionada. Se for a seta para a esquerda, altera a direção do jogador para o valor negativo um. Se for a seta para a direita, altera para o valor um positivo.

keyReleased() → Detecta quando uma tecla é solta. Se o jogador soltar a seta esquerda ou a seta direita, redefine a direção do jogador para zero, fazendo com que ele pare de andar.

Parte Seis: A Classe do Jogador
Este bloco de código funciona como o molde que cria e controla o comportamento do trator.

constructor() → Define as propriedades iniciais do trator: posição horizontal no centro da tela, posição vertical fixa no chão, tamanho do quadrado em sessenta pixels, velocidade de movimento em oito pixels por quadro e direção inicial em zero.

update() → Multiplica a direção pela velocidade e soma o resultado à posição horizontal do trator. Usa a função de limitação para impedir que a posição do trator fique menor que zero ou maior que a largura da tela.

show() → Desenha o quadrado verde do jogador nas coordenadas atuais e insere o caractere do trator exatamente no centro desse quadrado.

setDir(dir) → Uma função auxiliar que recebe o valor enviado pelas funções do teclado e atualiza a propriedade de direção do jogador.

Parte Sete: A Classe dos Itens
Este bloco de código funciona como o molde que cria e controla cada objeto que cai do céu.

constructor() → Define as propriedades do item: sorteia uma posição horizontal aleatória dentro da largura da tela, define a posição vertical inicial acima da tela, define o tamanho em trinta pixels, sorteia uma velocidade de queda aleatória entre dois e cinco, e calcula uma chance probabilística para definir se o item será do tipo sustentável ou do tipo poluente.

update() → Soma a velocidade de queda à posição vertical do item, fazendo com que ele se desloque para baixo a cada quadro.

show() → Alinha o texto ao centro e verifica o tipo do item. Se for sustentável, escolhe aleatoriamente um caractere entre planta, água, sol ou árvore e o desenha na tela. Se for poluente, escolhe entre barril de óleo, fumaça ou lixo.

hits(player) → Realiza um cálculo matemático comparando as quatro bordas do retângulo do item com as quatro bordas do retângulo do jogador. Se todas as sobreposições forem verdadeiras ao mesmo tempo, a função retorna um aviso de que houve colisão.
