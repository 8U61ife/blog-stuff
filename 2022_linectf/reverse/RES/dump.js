function dump(heap, idx, maxBytesToRead) {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx;
    var str = [];
    while (!(endPtr >= endIdx)){
        str.push(heap[endPtr])
        ++endPtr;
    }
    return str
}