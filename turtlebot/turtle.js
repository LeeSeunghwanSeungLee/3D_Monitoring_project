class Robot_connection {

    constructor() {
        let temp = stems.getObjectInfo('turtle...');
        this.pivot_x = temp.position.x;
        this.pivot_y = temp.position.y;
        this.cursor_x = 0;
        this.cursor_y = 0;
        this._theta = 0;
    }
  
    get_ClickPosition() {
        //좌표를 가져온다 -> this.pivot_x ...에 저장한다

        //해당지점에다가 얹는다 
        robot_position = stems.addModel('temp_turtle', 'load_id',
        {
            position : {x : getpos_x, y : get_pos_y, z : 5},
            scale : {x: scale_x, y : scale_y, z : scale_z}
        });
        //마우스 무브 이벤트를 얹는다
        stems.on("mousemove", function(){
           
            //마우스 커서를좌표를 잡는다

            //calculate
            let _theta = Math.atan((cursor_y - robot_y) / (cursor_x - robot_x));
            stems.setObjectInfo("turtle...",{roation : {z : _theta}});
            //만일 클릭하게 된다면..해당 각도를.. this._theta 에 저장한다
            
        });
    }

    // 2. 마우스 쫓아다니게하면서 회전시키고 확정시키기
    get_CursorPosition() {
        stems.on("mousemove", function(){
           
            //마우스 커서를좌표를 잡는다

            //calculate
            let _theta = Math.atan((cursor_y - robot_y) / (cursor_x - robot_x));
            stems.setObjectInfo("turtle...",{roation : {z : _theta}});
            //만일 클릭하게 된다면..해당 각도를.. this._theta 에 저장한다
            
        });
    }
    end_CursorPosition(){
        // stems.off...mousemove event
    }

    // 3. 해당 좌표와 각도를 계산하고 sendgoal 시키기
    calc_RealCoordinate() {
        this._theta = Math.atan((this.cursor_y - this.pivot_y) / (this.cursor_x - this.pivot_x));
    }
    // 4. 좌표 정보를 지속적으로 가져오기..
    get_RecentPosition() {

    }
    calc_VirtualCoordi() {

    }
    // 5. 터틀봇 moveobject시키기
    update_ObjectPosition() {
        // stems.moveModel
    }
  }
  
// 순서는 아래와 같다
// 1. 좌클릭
// 2. 클릭한 지점에 터틀봇 오브젝트 띄운다
// 3. 마우스 이벤트 온
// 4. 커서좌표를 따라다니면서 각도를 변경한다
// 5. 한번더 클릭시 그대로 오브젝트 set된거 확인 후 3초뒤에 사라진다
        //피봇을 기준으로 시계방향으로 3도 이동후 좌표 + 각도를 계산해야한다
// 6. 사라지기 전에 좌표와 각도를 계산한다음 계산해서 터틀봇 서버에 전송
// 7. 지금 좌표를 계속받아오는 listner를 켠다 -> 화면이 켜지자마자 실제 위치를 받아와서 수정하는게 필요할것으로 보인다. 단. pivot은 고정시켜놔야한다
// 8. 받아온 좌표를 역 계산한다
// 9  실제 터틀봇에 위치시킨다..