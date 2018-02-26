function getSecondLargest(nums) {
    // Complete the function
    let largest;
    let largest_2nd;
    
    if(nums[0]>nums[1]){
        largest     =  nums[0];
        largest_2nd =  nums[1];
    }
    else{
        largest     =  nums[1];
        largest_2nd =  nums[0];
        
    }
    
    for(let i=0; nums.length>i ; i++){
        if(nums[i]>largest){
            largest_2nd =  largest;
            largest     =  nums[i];
        }
        else if(nums[i]>largest_2nd && nums[i] != largest){
            largest_2nd = nums[i];
        }
    }
    
    return largest_2nd;
}
