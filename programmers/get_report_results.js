function solution(id_list, report, k) {
    const call = new Set(report) 
    const new_call = [...call] // 중복이 제거 된 신고 목록
    const call_num = []
    for(let i=0; i<id_list.length; i++){
      let count = 0
      for(let j=0; j<new_call.length;j++){
        if(id_list[i]===new_call[j].split(" ")[1]){
          count = count+1
        }
      }
      call_num.push(count)
    }
    const name=id_list.filter((el, index)=>{
      if(call_num[index]>=k)
      return el
    })
    const result = []
    for(let i=0; i<id_list.length;i++){
          let count = 0
      for(let j=0; j<new_call.length;j++){
        if(id_list[i]===new_call[j].split(" ")[0]&&name.includes(new_call[j].split(" ")[1])){
          count = count+1
        }
      }
      result.push(count)
    }
  
    return result
  }
  
// 시간 초과 해결

function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0) 
    const report_list = {} 
    
    
    id_list.map((el)=>{
        report_list[el] = [] //key로 userid를 value로 빈 배열을 가지는 객체
    })
    
    report.map((el)=>{
        const [user_id, report_id] = el.split(' ')
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }        
    })
    
    for(const key in report_list){
        if(report_list[key].length >= k){ //이용정지 유저
            report_list[key].map((el)=>{
                answer[id_list.indexOf(el)] += 1
            })
        }
    }
    return answer;
}