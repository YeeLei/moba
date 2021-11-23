export default {
  computed: {
    // 文件上传地址
    uploadUrl() {
      return process.env.VUE_APP_BASE_API ?
        process.env.VUE_APP_BASE_API + '/upload/images' : '/admin/upload/images'
    },
    // 文件上传时的请求头
    uploadHeaders() {
      return { 'Authorization': localStorage.getItem('token') || '' }
    }
  },
  methods: {
    // 文件上传成功的回调函数
    uploadSuccess(res) {
      this.model.icon = res.data.url
    },
    // 文件上传之前的回调函数
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt5M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG或PNG 格式!');
      }
      if (!isLt5M) {
        this.$message.error('上传图片大小不能超过 5MB!');
      }
      return isJPG && isLt5M;
    }
  }
}