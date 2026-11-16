import type { CompetencySummary, ResourceSummary } from './types'

export const PREVIEW_COMPETENCIES: CompetencySummary[] = [
  {
    code: 'C1',
    slug: 'c1',
    name: 'Programar em linguagem estruturada',
    description: 'Passo a passo lógico para resolver problemas, do pseudocódigo ao programa.',
    level: 'basic',
    disciplines: ['Programação I'],
    topics: [
      {
        slug: 'variaveis-e-tipos',
        title: 'Variáveis e tipos',
        summary:
          'Representam espaços nomeados na memória com formato e operações bem definidas.',
        examNote: 'Cai em prova: diferença entre divisão inteira e divisão de ponto flutuante.',
        codeSnippet: 'int idade = 20;\ndouble media = 8.5;',
      },
      {
        slug: 'busca-binaria',
        title: 'Busca binária',
        summary:
          'Em um vetor ordenado, compare com o elemento do meio e descarte metade das possibilidades a cada passo. Isso leva a complexidade de O(n) para O(log n).',
        examNote: 'Cai em prova: por que o vetor precisa estar ordenado?',
        codeSnippet:
          'def busca_binaria(v, x):\n    lo, hi = 0, len(v) - 1\n    while lo <= hi:\n        meio = (lo + hi) // 2\n        if v[meio] == x: return meio\n        if v[meio] < x: lo = meio + 1\n        else: hi = meio - 1\n    return -1',
      },
    ],
  },
  {
    code: 'C2',
    slug: 'c2',
    name: 'Programar em linguagem orientada a objetos básica',
    description: 'Classes, objetos e os pilares que organizam programas maiores.',
    level: 'basic',
    disciplines: ['Programação'],
    topics: [
      {
        slug: 'encapsulamento',
        title: 'Encapsulamento',
        summary:
          'Esconde o estado interno do objeto e expõe só operações controladas. Assim, as regras de negócio ficam num lugar e o resto do código não quebra o objeto.',
        examNote: 'Cai em prova: diferencie encapsulamento de abstração.',
        codeSnippet:
          'class Conta:\n    def __init__(self, saldo):\n        self._saldo = saldo\n\n    def sacar(self, valor):\n        if valor > self._saldo:\n            raise ValueError("Saldo insuficiente")\n        self._saldo -= valor',
      },
    ],
  },
  {
    code: 'C8',
    slug: 'c8',
    name: 'Programar em linguagem orientada a objetos avançada',
    description: 'Como organizar estruturas de dados e coleções para resolver problemas com eficiência.',
    level: 'intermediate',
    disciplines: ['Programação'],
    topics: [
      {
        slug: 'tabelas-hash',
        title: 'Tabelas hash',
        summary:
          'Guardam pares chave-valor e encontram qualquer item em tempo médio constante. Uma função de hash transforma a chave num índice do vetor interno.',
        examNote: 'Cai em prova: explique o que acontece numa colisão.',
        codeSnippet:
          '# valor -> posição\ndef two_sum(nums, alvo):\n    vistos = {}\n    for i, n in enumerate(nums):\n        if alvo - n in vistos:\n            return [vistos[alvo - n], i]\n        vistos[n] = i',
      },
    ],
  },
  {
    code: 'C9',
    slug: 'c9',
    name: 'Analisar modelos formais para criação de Banco de Dados Relacional',
    description: 'Modelagem, SQL e como guardar e consultar dados com segurança.',
    level: 'intermediate',
    disciplines: ['Banco de Dados I'],
    topics: [
      {
        slug: 'juncoes',
        title: 'Junções (JOIN)',
        summary:
          'Combinam linhas de tabelas diferentes usando uma chave em comum. O INNER JOIN traz só os pares que existem nas duas tabelas.',
        examNote: 'Cai em prova: diferença entre INNER e LEFT JOIN.',
        codeSnippet:
          'SELECT a.nome, c.titulo\nFROM aluno a\nJOIN matricula m ON m.aluno_id = a.id\nJOIN curso c ON c.id = m.curso_id;',
      },
    ],
  },
  {
    code: 'C16',
    slug: 'c16',
    name: 'Projetar uma rede de comunicação de dados',
    description: 'Como os dispositivos se comunicam, do cabo até a aplicação.',
    level: 'intermediate',
    disciplines: ['Redes de computadores'],
    topics: [
      {
        slug: 'sockets',
        title: 'Sockets',
        summary:
          'São o ponto de contato entre o programa e a rede. Com um socket você abre uma conexão, envia bytes e lê a resposta do outro lado.',
        examNote: 'Cai em prova: TCP x UDP e quando usar cada um.',
        codeSnippet:
          'import socket\ns = socket.create_connection(("example.com", 80))\ns.sendall(b"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")\nprint(s.recv(200))',
      },
    ],
  },
  {
    code: 'C17',
    slug: 'c17',
    name: 'Utilizar UML na modelagem de sistemas de informação',
    description: 'Como planejar, construir e manter software em equipe.',
    level: 'advanced',
    disciplines: ['Engenharia de Software'],
    topics: [
      {
        slug: 'requisitos',
        title: 'Requisitos',
        summary:
          'Descrevem o que o sistema precisa fazer e com que qualidade. Escrever cenários em linguagem simples ajuda a equipe e o cliente a concordar antes de codar.',
        examNote: 'Cai em prova: requisito funcional x não funcional.',
        codeSnippet:
          'Funcionalidade: Consultar notas\n  Como aluno\n  Quero ver minhas notas\n  Para acompanhar meu desempenho',
      },
    ],
  },
]

export const PREVIEW_QUESTIONS: ResourceSummary[] = [
  {
    slug: 'two-sum',
    title: 'Two Sum',
    type: 'question',
    competencies: ['C8'],
    tags: ['hash-table', 'array'],
    author: 'UniCode Students',
    date: '2026-11-16',
    topic: 'Tabela hash',
    difficulty: 'easy',
  },
  {
    slug: 'binary-search',
    title: 'Binary Search',
    type: 'question',
    competencies: ['C1'],
    tags: ['binary-search', 'array'],
    author: 'UniCode Students',
    date: '2026-11-16',
    topic: 'Busca binária',
    difficulty: 'easy',
  },
  {
    slug: 'valid-parentheses',
    title: 'Valid Parentheses',
    type: 'question',
    competencies: ['C8'],
    tags: ['stack', 'string'],
    author: 'UniCode Students',
    date: '2026-11-16',
    topic: 'Pilha',
    difficulty: 'easy',
  },
  {
    slug: 'lru-cache',
    title: 'LRU Cache',
    type: 'question',
    competencies: ['C2'],
    tags: ['design', 'hash-table'],
    author: 'UniCode Students',
    date: '2026-11-16',
    topic: 'Encapsulamento e estruturas',
    difficulty: 'medium',
  },
  {
    slug: 'combine-two-tables',
    title: 'Combine Two Tables',
    type: 'question',
    competencies: ['C9'],
    tags: ['sql', 'join'],
    author: 'UniCode Students',
    date: '2026-11-16',
    topic: 'Junções (JOIN)',
    difficulty: 'easy',
  },
]
