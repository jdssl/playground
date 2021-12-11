'use strict'

const hanoi = function hanoi(disc, src, aux, dst) {
	if (disc > 0) {
		hanoi(disc -1, src, dst, aux)
		document.writeln(`Move disc ${disc} from ${src} to ${dst}<br>`)
		hanoi(disc - 1, aux, src, dst)
	}
}

hanoi(3, 'src', 'aux', 'dst')

