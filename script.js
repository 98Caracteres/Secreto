const plantas = [
    {
        "nome": "Ayahuasca",
        "nome_cientifico": "Banisteriopsis caapi",
        "efeitos": "Produz uma intensa experiência psicoativa com efeitos de purgação, visões e introspecção profunda.",
        "usos": "Tradicionalmente utilizada em rituais de cura e espiritualidade por povos indígenas da Amazônia.",
        "precaucoes": "Pode induzir vômito e provocar efeitos intensos para iniciantes. Não deve ser combinada com certos medicamentos.",
        "descricao": "A Ayahuasca é um chá feito a partir de plantas que contêm DMT (dimetiltriptamina), combinado com o Banisteriopsis caapi, uma planta que inibe a degradação do DMT."
    },
    {
        "nome": "Cogumelo Psilocybe",
        "nome_cientifico": "Psilocybe cubensis",
        "efeitos": "Causa alucinações visuais, euforia e uma sensação de conexão com o ambiente e o cosmos.",
        "usos": "Usado em contextos terapêuticos e espirituais, também conhecido por ser usado em rituais xamânicos.",
        "precaucoes": "Pode causar experiências intensas e angústia, especialmente se não houver um ambiente controlado e seguro. Cuidado com o envenenamento por cogumelos não identificados.",
        "descricao": "Este cogumelo contém psilocibina, que é responsável pelos efeitos alucinógenos. A psilocibina é uma substância psicodélica usada em várias culturas para promover a introspecção."
    },
    {
        "nome": "Peyote",
        "nome_cientifico": "Lophophora williamsii",
        "efeitos": "Efeitos como alucinações visuais e sensoriais, aumento da percepção do ambiente e alterações no senso de tempo.",
        "usos": "Usado em rituais religiosos por nativos do México e EUA, especialmente por povos indígenas como os Huicholes.",
        "precaucoes": "Pode causar náusea, tontura e desidratação. O uso inadequado pode levar a envenenamento.",
        "descricao": "O Peyote é um pequeno cacto que contém mescalina, uma substância psicodélica potente que altera a percepção."
    },
    {
        "nome": "Cannabis",
        "nome_cientifico": "Cannabis sativa",
        "efeitos": "Efeitos psicotrópicos incluem euforia, aumento da percepção sensorial, relaxamento e alterações de pensamento.",
        "usos": "Usada em muitos contextos: recreativo, medicinal e ritualístico em várias culturas. Muito usada para tratar dor crônica, ansiedade e outras condições.",
        "precaucoes": "Pode causar ansiedade ou paranoia em algumas pessoas, especialmente em doses elevadas. Deve ser usada com cautela por pessoas com condições mentais preexistentes.",
        "descricao": "A cannabis contém canabinoides, como o THC, que interagem com o sistema endocanabinoide do corpo, produzindo efeitos psicoativos."
    }
];
fetch('base_de_dados.json')
    .then(response => response.json())
    .then(plantas => {
        displayPlantas(plantas); // Passando os dados carregados para a função de exibição
    })
    .catch(error => {
        console.error("Erro ao carregar os dados JSON:", error);
    });
function displayPlantas() {
    let plantList = document.getElementById('plant-list');
    plantas.forEach(planta => {
        let div = document.createElement('div');
        div.classList.add('plant-card');
        div.innerHTML = `
            <h2>${planta.nome}</h2>
            <h4>Nome Científico: ${planta.nome_cientifico}</h4>
            <p><strong>Efeitos:</strong> ${planta.efeitos}</p>
            <p><strong>Usos:</strong> ${planta.usos}</p>
            <p><strong>Precauções:</strong> ${planta.precaucoes}</p>
            <p><strong>Descrição:</strong> ${planta.descricao}</p>
        `;
        plantList.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', displayPlantas);
