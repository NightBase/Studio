<template>
    <div class="overflow-hidden">
        <div class="w-screen h-screen absolute square-animation" />
    </div>
</template>
<style scoped lang="scss">
$bg-url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAAAAAAAAAAg2PpwAAAAAN0Uk5T/wBNTIPNHgAAAB9JREFUeJxjkFqFAA0MrqEIkMAwdZQ3yhtUPC/k1AoAlMHs8bO82AYAAAAASUVORK5CYII=';
$bg-width: 50px;
$bg-height: 50px;
/* Animations */
@-webkit-keyframes bg-scrolling-reverse {
    100% {
        background-position: $bg-width $bg-height;
    }
}
@-moz-keyframes bg-scrolling-reverse {
    100% {
        background-position: $bg-width $bg-height;
    }
}
@-o-keyframes bg-scrolling-reverse {
    100% {
        background-position: $bg-width $bg-height;
    }
}
@keyframes bg-scrolling-reverse {
    100% {
        background-position: $bg-width $bg-height;
    }
}

@-webkit-keyframes bg-scrolling {
    0% {
        background-position: $bg-width $bg-height;
    }
}
@-moz-keyframes bg-scrolling {
    0% {
        background-position: $bg-width $bg-height;
    }
}
@-o-keyframes bg-scrolling {
    0% {
        background-position: $bg-width $bg-height;
    }
}
@keyframes bg-scrolling {
    0% {
        background-position: $bg-width $bg-height;
    }
}

/* Main styles */
.square-animation {
    background: url($bg-url) repeat 0 0;
    -webkit-animation: bg-scrolling-reverse 0.92s infinite; /* Safari 4+ */
    -moz-animation: bg-scrolling-reverse 0.92s infinite; /* Fx 5+ */
    -o-animation: bg-scrolling-reverse 0.92s infinite; /* Opera 12+ */
    animation: bg-scrolling-reverse 0.92s infinite; /* IE 10+ */
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;
}
</style>
