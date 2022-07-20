import { Component, OnInit, ViewChild,AfterViewInit ,Renderer2 } from '@angular/core';
import { DemoService } from '../demo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit ,AfterViewInit {
  @ViewChild("titleInput") public titleInput: any; // accessing the reference element
  siblings: {}[] = [];


  //details: {avatar_url:any,login: string, type: string}[] = [];
  details:[]=[];
  empty: boolean=false;
  constructor(
    private demoService:DemoService,
    private toastr: ToastrService ,
    private router: Router) { }

  ngOnInit(): void {
    //this.titleInput.nativeElement.value= 'test';
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
  ngAfterViewInit() {
   // this.renderer.setProperty(this.titleInput.nativeElement, 'innerHTML', '<h1>Hello world</h1>');
   //this.titleInput.nativeElement.value= 'test';
  }
 logout(){
  localStorage.removeItem('token')
  this.router.navigate(["/"]);
  this.toastr.error("You are logged out!!",'',{
    timeOut:4000,
    progressBar:true,
    positionClass :'toast-top-right'
    
  });
 }
}
