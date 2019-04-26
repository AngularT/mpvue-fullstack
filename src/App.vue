<script>
import { get } from './utils';

export default {
  async created() {
    const res = await get('/weapp/demo');

    console.log('小程序启动了', res);
  }
}
</script>
<style>

</style>
