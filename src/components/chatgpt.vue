<template>
    <v-app>
        <v-main>
            <v-container>
                <v-card>
                    <v-card-title class="text-center">
                        <h1>{{ currentTrack.title }}</h1>
                    </v-card-title>
                    <v-card-text class="text-center">
                        <audio ref="audioPlayer" :src="currentTrack.url"></audio>
                        <v-btn color="primary" @click="prevTrack">
                            <v-icon>mdi-rewind</v-icon>
                        </v-btn>
                        <v-btn color="primary" @click="playPause">
                            <v-icon>
                                {{ isPlaying? 'mdi-pause': 'mdi-play' }}
                            </v-icon>
                        </v-btn>
                        <v-btn color="primary" @click="nextTrack">
                            <v-icon>mdi-fast-forward</v-icon>
                        </v-btn>
                    </v-card-text>
                    <v-progress-linear height="10" :max="duration" color="secondary"></v-progress-linear>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            isPlaying: false,
            tracks: [
                {
                    id: 1,
                    title: 'Track 1',
                    artist: 'Artist 1',
                    title: "Track 1",
                    sr: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                },
                {
                    id: 2,
                    title: 'Track 2',
                    artist: 'Artist 2',
                    title: "Track 2",
                    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
                },
                {
                    id: 3,
                    title: 'Track 3',
                    artist: 'Artist 3',
                    title: "Track 3",
                    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
                }
            ],
            currentTrackIndex: 0,
            audio: null,
            duration: 0,
            currentTime: 0
        };
    },
    computed: {
        currentTrack() {
            return this.tracks[this.currentTrackIndex];
        }
    },
    methods: {
        playPause() {
            const audio = this.$refs.audioPlayer;
            this.isPlaying = !this.isPlaying;
            if (this.isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
        },
        prevTrack() {
            this.currentTrackIndex--;
            if (this.currentTrackIndex < 0) {
                this.currentTrackIndex = this.tracks.length - 1;
            }
            this.isPlaying = false;
            this.$refs.audioPlayer.load();
        },
        nextTrack() {
            this.currentTrackIndex++;
            if (this.currentTrackIndex >= this.tracks.length) {
                this.currentTrackIndex = 0;
            }
            this.isPlaying = false;
            this.$refs.audioPlayer.load();
        }
    }
    ,
    beforDestroy() {
        this.audio.pause();
        this.audio = null();
    }
};




</script>

