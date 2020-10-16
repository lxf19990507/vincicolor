var count=0
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
		count++
		if(count==1)return;
		
		var length=val.length
		for(let i=0;i<length;i++){
		    lazy.state().obj[val[i].target.className](val[i])
		}
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


