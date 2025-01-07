const produtos = [
    {
        categoria: "Vinhos",
        itens: [
            {
                imagem: "Images/Itens_Catalogo/Vinho Tinto Suave 750ml.jpeg",
                titulo: "Vinho tinto suave 750ml",
                descricao: "Elaborado a partir da uva Bordô, comumente valorizada por sua rusticidade e versatilidade. Este vinho é conhecido por seu sabor frutado e leve. É frequentemente utilizado em ocasiões informais e harmoniza bem com queijos e pratos leves.",
                preco: "R$ 35,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Vinho Tinto Seco 750ml.jpeg",
                titulo: "Vinho tinto seco 750ml",
                descricao: "Elaborado a partir da uva Bordô, harmonizando bem com pratos variados, desde carnes grelhadas até massas. Por ser classificado como seco, o vinho deve ter no máximo 4 gramas de açúcar residual por litro, resultando em um sabor que não apresenta doçura perceptível.",
                preco: "R$ 35,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Vinho Tinto Demi-Seco 750ml.jpeg",
                titulo: "Vinho tinto demi-seco 750ml",
                descricao: "Elaborado a partir da uva Bordô, apresentando um equilíbrio entre doçura e acidez. O vinho demi seco contém entre 4 a 25 gramas de açúcar residual por litro, o que proporciona uma leve doçura que não é tão pronunciada quanto a dos vinhos doces, mas é mais perceptível do que nos vinhos secos.",
                preco: "R$ 35,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Vinho Branco Suave 750ml.jpeg",
                titulo: "Vinho branco suave 750ml",
                descricao: "Elaborado a partir da uva Niágara Verde, comumente valorizada por seu aroma frutado e doçura natural, idela para quem busca uma experiência leve e refrescante. são perfeitos para diversas ocasiões, desde encontros informais até celebrações.",
                preco: "R$ 35,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Vinho Branco Seco 750ml.jpeg",
                titulo: "Vinho branco seco 750ml",
                descricao: "Elaborado a partir da uva Niágara Verde, O vinho branco seco contém menos de 4 gramas de açúcar residual por litro, resultando em um sabor que não apresenta doçura. Oferece um sabor macio e gastronômico, perfeito para harmonizar com frutos do mar e carnes brancas.",
                preco: "R$ 35,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Vinho Rose Suave 750ml.jpeg",
                titulo: "Vinho ros é suave 750ml",
                descricao: "Elaborado a partir da uva Niágara Rosada, sendo ideal para quem busca um sabor adocicado e refrescante. Este vinho é versátil e pode ser harmonizado com uma variedade de pratos, incluindo saladas, frutos do mar e sobremesas leves, como mousses.",
                preco: "R$ 35,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Vinho Rose Seco 750ml.jpeg",
                titulo: "Vinho rosé seco 750ml",
                descricao: "Elaborado a partir da uva Niágara Rosada, é uma bebida que combina a leveza dos vinhos brancos com a complexidade dos tintos. O vinho rosé seco contém menos de 4 gramas de açúcar residual por litro, resultando em um sabor que não apresenta doçura, mas sim uma frescura agradável.",
                preco: "R$ 35,00"
            },
        ]
    },
    {
        categoria: "Chopps de Vinho",
        itens: [
            {
                imagem: "Images/Itens_Catalogo/Chopp de Vinho Tinto 600ml.png",
                titulo: "Chopp de Vinho Tinto 600ml",
                descricao: "Uma bebida que combina elementos de cerveja e vinho, criando um coquetel refrescante. O chopp de vinho artesanal representa uma fusão interessante entre a cultura cervejeira e vinícola, oferecendo uma alternativa refrescante para os amantes de bebidas alcoólicas.",
                preco: "R$ 17,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Chopp de Vinho Branco 600ml.png",
                titulo: "Chopp de Vinho Branco 600ml",
                descricao: "Uma bebida que combina elementos de cerveja e vinho, criando um coquetel refrescante. O chopp de vinho artesanal representa uma fusão interessante entre a cultura cervejeira e vinícola, oferecendo uma alternativa refrescante para os amantes de bebidas alcoólicas.",
                preco: "R$ 17,00"
            }
        ]
    },
    {
        categoria: "Garrafão de Vinho",
        itens: [
            {
                imagem: "Images/Itens_Catalogo/Garrafão de Vinho 4.6L.png",
                titulo: "Garrafão de Vinho 4.6L",
                descricao: "Agora que você já conhece as uvas e as harmonizações ideais para cada vinho, que tal garantir seu garrafão, economizando e garantindo muito vinho para seu almoço ou celebração?",
                preco: "R$ 120,00"
            },

        ]
    },
    {
        categoria: "Espumantes",
        itens: [
            {
                imagem: "Images/Itens_Catalogo/Espumante Moscatel Rosé.png",
                titulo: "Espumante Moscatel Rosé",
                descricao: "Elaborado com uvas da variedade Moscato, através de leveduras selecionadas e apresentando coloração rosada. O espumante é fermentado a baixas temperaturas, para que preserve os aromas primários, proporcionando frescor, sutileza e agradável sensação de doçura ao paladar.",
                preco: "R$ 55,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Espumante Moscatel Branco.png",
                titulo: "Espumante Moscatel Branco",
                descricao: "Elaborado com uvas da variedade Moscato, através de leveduras selecionadas e apresentando coloração rosada. O espumante é fermentado a baixas temperaturas, para que preserve os aromas primários, proporcionando frescor, sutileza e agradável sensação de doçura ao paladar.",
                preco: "R$ 55,00"
            }
        ]
    },
    {
        categoria: "Sucos",
        itens: [
            {
                imagem: "Images/Itens_Catalogo/Suco de Uva Tinto Integral 1.5l.png",
                titulo: "Suco de Uva Tinto Integral 1.5l",
                descricao: "Produzido a partir da uva Bordô, além de saboroso, ele hidrata e faz bem para sua saúde, já que ao contrário dos sucos industrializados, nosso processo de fabricação utiliza a uva toda, da casca até as sementes, sem adição de água, açúcares ou conservantes, garantindo a presença de todos os nutrientes da uva e intensificando o sabor do suco.",
                preco: "R$ 35,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Suco de Uva Tinto Integral 1l.png",
                titulo: "Suco de Uva Tinto Integral 1l",
                descricao: "Produzido a partir da uva Bordô, além de saboroso, ele hidrata e faz bem para sua saúde, já que ao contrário dos sucos industrializados, nosso processo de fabricação utiliza a uva toda, da casca até as sementes, sem adição de água, açúcares ou conservantes, garantindo a presença de todos os nutrientes da uva e intensificando o sabor do suco.",
                preco: "R$ 35,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Suco de Uva Rosé Integral 1.5l.png",
                titulo: "Suco de Uva Tinto Rosé 1.5l",
                descricao: "Produzido a partir da uva Bordô, além de saboroso, ele hidrata e faz bem para sua saúde, já que ao contrário dos sucos industrializados, nosso processo de fabricação utiliza a uva toda, da casca até as sementes, sem adição de água, açúcares ou conservantes, garantindo a presença de todos os nutrientes da uva e intensificando o sabor do suco.",
                preco: "R$ 35,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Suco de Uva Rosé Integral 1.5l.png",
                titulo: "Suco de Uva Tinto Rosé 1l",
                descricao: "Produzido a partir da uva Bordô, além de saboroso, ele hidrata e faz bem para sua saúde, já que ao contrário dos sucos industrializados, nosso processo de fabricação utiliza a uva toda, da casca até as sementes, sem adição de água, açúcares ou conservantes, garantindo a presença de todos os nutrientes da uva e intensificando o sabor do suco.",
                preco: "R$ 35,00"
            }
        ]
    },
    {
        categoria: "Cachaças",
        itens: [
            {
                imagem: "Images/Itens_Catalogo/Cachaça Dourada (Barril).png",
                titulo: "Cachaça Dourada (Barril)",
                descricao: "Destilado alcoólico de cana-de-açúcar. A cachaça dourada apresenta uma coloração amarelada, resultado do envelhecimento em barricas de madeira, contribuindo para o perfil aromático e gustativo. Devido ao seu tempo de curtição e produção, esta cachaça é considerada envelhecida, com padrão de qualidade superior.",
                preco: "R$ 45,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Cachaça Prata (Pura).png",
                titulo: "Cachaça Prata (Pura)",
                descricao: "Destilado alcoólico de cana-de-açúcar, passando por um processo de envelhecimento de um a seis meses em recipientes de inox ou madeira neutra. A fabricação artesanal é bastante valorizada, desde a seleção e colheita da cana até o armazenamento em recipientes adequados, o que garante características únicas de sabor e aroma.",
                preco: "R$ 45,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Cachaça Abacaxi 750ml.png",
                titulo: "Cachaça de abacaxi, coco, gengibre, canela e banana",
                descricao: "Destilado alcoólico de cana-de-açúcar. Buscando maior versatilidade e sabor, esta cachaça possui a adição do extrato vegetal. Perfeita para momentos de descontração!",
                preco: "R$ 45,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Cachaça Abacaxi 750ml.png",
                titulo: "Cachaça de bolso de abacaxi, coco, gengibre, canela e banana",
                descricao: "Destilado alcoólico de cana-de-açúcar. Buscando maior versatilidade e sabor, esta cachaça possui a adição do extrato vegetal. Perfeita para momentos de descontração!",
                preco: "R$ 45,00"
            }
        ]
    },
    {
        categoria: "CervDestiladosejas",
        itens: [
            {
                imagem: "Images/Itens_Catalogo/Maracujazinho 750ml.png",
                titulo: "Maracujazinho",
                descricao: "Destilado alcoólico de cana-de-açúcar. Esta bebida refrescante possui a adição de maracujá (fruta) e cravo, possuindo sabor único. Seu sabor remete a popular caipirinha.",
                preco: "R$ 40,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Limãozinho 750ml.png",
                titulo: "Limãozinho 750ml",
                descricao: "Destilado alcoólico de cana-de-açúcar. Esta bebida refrescante possui a adição de limão (fruta) e cravo, possuindo sabor único. Seu sabor remete a popular caipirinha.",
                preco: "R$ 40,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Graspa 750ml.png",
                titulo: "Graspa 750ml",
                descricao: "Destilado alcoólico do bagaço de uva, resultante do processo de vinificação. A graspa é conhecida por seu sabor intenso e aromas complexos. A graspa pode ser apreciada pura, como digestivo após as refeições, ou utilizada em coquetéis",
                preco: "R$ 70,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Batida de Chocolate 750ml.png",
                titulo: "Batida de Chocolate 750ml",
                descricao: "Destilado alcoólico de cana-de-açucar. Cremosa e docinha na medida certa, esta bebida é produzida a partir da aguardente de melado, combinada com chocolate, acuçar, leite condensado e leite de coco, causando uma sequência de sensações agradáveis ao paladar."
            },
            {
                imagem: "Images/Itens_Catalogo/Batida de Maracujá 750ml.png",
                titulo: "Batida de Maracujá 750ml",
                descricao: "Destilado alcoólico de cana-de-açucar. Cremosa e docinha na medida certa, esta bebida é produzida a partir da aguardente de melado, combinada com maracujá, acuçar, leite condensado e leite de coco, causando uma sequência de sensações agradáveis ao paladar."
            },
            {
                imagem: "Images/Itens_Catalogo/Batida de Coco 750ml.png",
                titulo: "Batida de Coco 750ml",
                descricao: "Destilado alcoólico de cana-de-açucar. Cremosa e docinha na medida certa, esta bebida é produzida a partir da aguardente de melado, combinada com coco, acuçar, leite condensado e leite de coco, causando uma sequência de sensações agradáveis ao paladar."
            },
            {
                imagem: "Images/Itens_Catalogo/Batida de Vinho Tinto 750ml.png",
                titulo: "Batida de Maracujá 750ml",
                descricao: "Destilado alcoólico de cana-de-açucar. Cremosa e docinha na medida certa, esta bebida é produzida a partir da aguardente de melado, combinada com vinho tinto, acuçar, leite condensado e leite de coco, causando uma sequência de sensações agradáveis ao paladar."
            },
        ]
    },
    {
        categoria: "Méis e Geléias",
        itens: [
            {
                imagem: "Images/Itens_Catalogo/Mel Puro Florada Silvestre 700g.png",
                titulo: "Mel Puro Florada Silvestre 700g",
                descricao: "O mel é um alimento de ação antioxidante e probiótica. Por ser rico em carboidratos e açúcar, ele é uma ótima fonte de energia. É rico em potássio, magnésio, sódio, cálcio, fósforo, ferro, manganês, cobalto, cobre e outros minerais. Além de tudo isso, é um ótimo aliado para quem busca uma alimentação equilibrada.",
                preco: "R$ 45,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Mel Puro Florada Silvestre 300g.png",
                titulo: "Mel Puro Florada Silvestre 300g",
                descricao: "O mel é um alimento de ação antioxidante e probiótica. Por ser rico em carboidratos e açúcar, ele é uma ótima fonte de energia. É rico em potássio, magnésio, sódio, cálcio, fósforo, ferro, manganês, cobalto, cobre e outros minerais. Além de tudo isso, é um ótimo aliado para quem busca uma alimentação equilibrada.",
                preco: "R$ 25,00"
            },
            {
                imagem: "Images/Itens_Catalogo/Geléias.png",
                titulo: "Geléias",
                descricao: "Que tal uma geléia feita artesanalmente onde você sente o gostinho verdadeiro da fruta? Tão deliciosa que parece um doce no pote. Sabores: amora, abacaxi com pimenta, morango e uva.",
                preco: "R$ 20,00"
            },
        ]
    }
];

// Função para gerar os cards
function gerarCards() {
    const container = document.getElementById("card-container");
    
    // Para cada categoria, cria-se um título e os cards dos produtos
    categorias.forEach(categoria => {
      // Adiciona o título da categoria
      const categoriaHTML = `
        <div class="col-12">
          <h3 class="text-center">${categoria.categoria}</h3>
        </div>
      `;
      container.innerHTML += categoriaHTML;
  
      // Para cada produto da categoria, cria-se um card
      categoria.itens.forEach(produto => {
        const cardHTML = `
          <div class="col-10 col-md-6 col-lg-3">
            <div class="card h-100" style="background-color: #4E3629; color: white;">
              <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
              <div class="card-body">
                <h5 class="card-title">${produto.nome}</h5>
                <p class="card-text">${produto.descricao}</p>
                <h5>${produto.preco}</h5>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += cardHTML;
      });
    });
  }
  
  // Chama a função para gerar os cards assim que a página carregar
  document.addEventListener("DOMContentLoaded", gerarCards);
