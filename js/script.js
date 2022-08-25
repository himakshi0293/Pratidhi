function getQuote() {
    var quotes = new Array(11);
    var sources = new Array(11);

    // Initialize the arrays with quotes
    quotes[0] = "Yoga is not a religion. It is a science, science of well-being, science of youthfulness, science of integrating body, mind and soul.";
    sources[0] = "― Amit Ray, Yoga and Vipassana: An Integrated Life Style";

    quotes[1] = "Yoga teaches us that we can have whatever we may want in life if we are willing to provide it for others first.";
    sources[1] = "― Sharon Gannon";

    quotes[2] = "Yoga is for internal cleansing, not external exercising. Yoga means true self-knowledge.";
    sources[2] = "– Sri Krishna Pattabhi Jois";

    quotes[3] = "Yoga is the art work of awareness on the canvas of body, mind, and soul.";
    sources[3] = "― Amit Ray, Yoga and Vipassana: An Integrated Life Style";

    quotes[4] = "Yoga is not about touching your toes, it’s about what you learn on the way down.";
    sources[4] = "— Jigar Gor";

    quotes[5] = "Yoga is essentially a practice for your soul, working through the medium of your body";
    sources[5] = "— Swami Satchidananda";

    quotes[6] = "If you fall over, you fall over. If you have to stop, you stop. But you start again. Just like life itself, you start again.";
    sources[6] = "— Gurmukh Kaur Khalsa";

    quotes[7] = "Move your joints every day. You have to find your own tricks. Bury your mind deep in your heart, and watch the body move by itself.";
    sources[7] = "— Sri Dharma Mittra";

    quotes[8] = "The nature of yoga is to shine the light of awareness into the darkest corners of the body.";
    sources[8] = "― Jim Rohn";

    quotes[9] = "Change only happens in the present moment. The past is already done. The future is just energy and intention.";
    sources[9] = "— Kino MacGregor";

    quotes[10] = "Yoga is a light, which once lit will never dim. The better your practice, the brighter your flame.";
    sources[10] = "— B.K.S. Iyengar";


    var i = Math.floor(Math.random() * quotes.length);
    document.write(quotes[i] + "\"");
    document.write("<em>- " + sources[i] + "</em>");
    document.write("</p>");
  }