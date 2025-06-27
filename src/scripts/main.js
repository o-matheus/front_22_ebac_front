AOS.init();

const dataEvento = new Date("Jul 22, 2025 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaOTempo = setInterval(function () {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const tempoEvento = timeStampEvento - timeStampAgora;

    const diasMs = 1000 * 60 * 60 * 24;
    const horasMs = 1000 * 60 * 60;
    const minutosMs = 1000 * 60;
    const segundosMs = 1000;

    const diasEvento = Math.floor(tempoEvento / diasMs);
    const horasEvento = Math.floor((tempoEvento % (diasMs)) / (horasMs));
    const minutosEvento = Math.floor((tempoEvento % (horasMs)) / (minutosMs));
    const segundosEvento = Math.floor((tempoEvento % (minutosMs)) / (segundosMs));
    
    document.getElementById('contador').innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`;

    if (tempoEvento < 0) {
        clearInterval(contaOTempo)
        document.getElementById('contador').innerHTML = "Evento realizado";
    }

}, 1000)