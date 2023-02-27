import SvgIcon from 'components/svgIcon/index.vue'

const requireAll = function (requireContest: any) {
	return Object.values(requireContest)
}

const req = import.meta.globEager('./svg/*.svg')

requireAll(req)

export default function (app: any) {
	app.component('SvgIcon', SvgIcon)
}