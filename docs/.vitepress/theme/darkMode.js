import { reactive }  from 'vue'
import darkData from '../../../dist/json/docs.json'
import lightData from '../../../dist/json/docs-light.json'
export default reactive({
	activeMode: 'dark',
	tokens: darkData,
	setMode(value) {
		this.activeMode = value
		if (value === 'light') {
			this.tokens = lightData
		} else {
			this.tokens = darkData
		}
	}
})