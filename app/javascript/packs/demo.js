// demo.js
import '@src/demo';

<%= javascript_packs_with_chunks_tag 'demo', 'application' %>
<%= stylesheet_packs_with_chunks_tag 'demo', 'application' %>
<!-- Use the following when not using split chunks -->
<!--<%= javascript_pack_tag 'demo' %>-->
<!--<%= stylesheet_pack_tag 'demo' %>-->
