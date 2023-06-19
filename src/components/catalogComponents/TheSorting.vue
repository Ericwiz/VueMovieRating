<script setup>
defineProps(['sortValue'])
defineEmits(['update:sortValue'])
</script>

<template>
    <div class="form-control w-full max-w-xs">
    <label for="sort"></label>
  <select class="select select-bordered" name="sort" :value="sortValue" @input="$emit('update:sortValue', $event.target.value)"> 
    <option disabled value="">Sort movies</option>
    <option value="Year">Year</option>
    <option value="Title">Title</option>
    <option value="Rating">Rating</option>
  </select>
</div>
</template>








<!-- <script setup>
defineProps([ 'sortByYear', 'sortByTitle', 'sortByRating'])

defineEmits(['update:sortByYear', 'update:sortByTitle', 'update:sortByRating'])

</script>

<template>
     <div>
        <ul class="menu max-w-xs bg-base-100 rounded-box">
            <li class="text-black">
                <details close>
                    <summary class="uppercase">Sort</summary>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="">Year</span> 
                            <input 
                            type="checkbox" class="checkbox checkbox-secondary" 
                            true-value="on"
                            false-value="off"
                            :value="sortByYear" 
                            @change="$emit('update:sortByYear', $event.target.checked)"
                            checked/>
                        </label>

                    </div> 
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="">Title</span> 
                            <input 
                            type="checkbox" class="checkbox checkbox-secondary"  
                            :value="sortByTitle" 
                            @change="$emit('update:sortByTitle', $event.target.checked)"/>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="">Rating</span> 
                            <input 
                            type="checkbox" class="checkbox checkbox-secondary" 
                            :value="sortByRating" 
                            @change="$emit('update:sortByRating', $event.target.checked)"/>
                        </label>
                    </div>
                </details>
            </li>
        </ul> 
    </div>
</template>
                 -->