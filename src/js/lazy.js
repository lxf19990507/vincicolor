
export class lazy{
    constructor(){
        this.instance = null;
        this.obj={}
        this.inster=new IntersectionObserver(this.callback );
    }
    static state(callback){
        if(!this.instance){
            this.instance = new lazy(callback);
        }
        return this.instance
    }
    callback(val){
		var length=val.length
		var index=0
		for(let i=0;i<length;i++){
		    if( val[i].intersectionRect.top!=0 ){
				index=i
				break
			}
		}
        lazy.state().obj[val[index].target.className](val[index])
    }
    /**
     * 开始观察
     * @param {obj} node 需要监听的dom节点
     * @param {Function} callback 回调函数
     */
    observe(node,callback){
        this.obj[node]=callback
        this.inster.observe( document.querySelector('.'+node) )
    }
    /**
     * 停止观察
     */
    unobserve(element){
        this.inster.disconnect( document.querySelector('.'+element) );
    }
    /**
     * 关闭观察器
     */
    disconnect(){
        this.inster.disconnect();
    }
}
export default lazy.state()


