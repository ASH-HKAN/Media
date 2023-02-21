export default function (lrc) {
    const lines = lrc.split('\n');
    const lyrics = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        const timeRegex = /\[(\d{2}):(\d{2})\.(\d{2})\]/;
        const timeMatch = line.match(timeRegex);

        if (timeMatch) {
            const text = line.replace(timeRegex, '').trim();
            const minutes = parseInt(timeMatch[1]);
            const seconds = parseInt(timeMatch[2]);
            const milliseconds = parseInt(timeMatch[3]);
            const time = minutes * 60 + seconds + milliseconds / 1000;
            lyrics.push({ time: time.toFixed(2), text });
        }
    }

    return  lyrics ;
}