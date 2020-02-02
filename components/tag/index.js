// components/tag/index.js
Component({
  options:{
    multipleSlots:true
  },
  externalClasses:['tag-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    text:String,
    num:Number,
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap:function(event){
      this.triggerEvent("tapping",{
        text:this.properties.text
      },{});
    }
  }
})
