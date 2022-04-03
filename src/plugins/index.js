export default {
    install(Vue, options) {
        Vue.directive(options.name, {
            bind(element, binding) {
                element.innerHTML = binding.value.toUpperCase();
                console.log(element, binding);
            },
			update(element,binding){
				element.value = binding.value
			}
        })
    }
}