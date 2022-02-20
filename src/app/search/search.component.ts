import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoService } from '../demo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild("titleInput") public titleInput: any; // accessing the reference element
  siblings: {}[] = [];


  //details: {avatar_url:any,login: string, type: string}[] = [];
  details:[]=[];
  empty: boolean=false;
  constructor(
    private demoService:DemoService,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  submitQuery(input:any){
    console.log("button clicked " + input)
    if(input == null || input == undefined || input == ""){
      this.toastr.error('Please Enter Value..','Failed!',{
        timeOut:4000,
        progressBar:true,
        positionClass :'toast-top-right'
        
      });
    }
    else{
      this.demoService.getGithubDummyData(input).subscribe((res:any)=>{
        this.details = res.items
        if(this.details.length == 0)
        {
          this.empty= true;
          
        }
        else{
          this.empty= false;
        }
        },error=>{
          this.toastr.error("Something went wrong!!",'Failed!',{
            timeOut:4000,
            progressBar:true,
            positionClass :'toast-top-right'
            
          });
        })
       this.titleInput.nativeElement.value= '';
     
    }
  }
}
