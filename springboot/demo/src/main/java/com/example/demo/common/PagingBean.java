package com.example.demo.common;

import javax.print.attribute.standard.PagesPerMinute;

import lombok.Data;

@Data
public class PagingBean {
    
    //화면에 보여줄 개수
    private int countPerPage = 5;

    //
    private int countPerRecord = 10;

    private int totalRecordCount;

    private int totalPageCount;

    private int pageNo;


    private int startRow;

    private int endRow;


    private int totalGroupCount;

    private int groupNo;

    private int pageStartNo;

    private int pageEndNo;


    //화면에 표시할 페이지 계산
    //totalRecordCount - 전체개수
    public void calcPage(int totalRecordCount){

        this.pageNo = pageNo == 0 ? 1 : pageNo;
        
        this.totalRecordCount = totalRecordCount;

        //전체페이지개수
         this.totalPageCount = calculateTotalPageCount(totalRecordCount, countPerRecord);

         //db에서 가져올 시작행번호
         //mysql limit
         startRow = ((pageNo - 1) * countPerRecord);

         //db에서 가져올 끝행 번호
        endRow = pageNo * countPerRecord;

        totalGroupCount = calculateTotalPageCount(totalRecordCount, countPerPage);

        groupNo = calculateTotalPageCount(pageNo, countPerPage);

        if(totalRecordCount == 0){
            pageStartNo = 1;
        }else{
            pageStartNo = (groupNo - 1) * countPerPage + 1;
        }

        pageEndNo = groupNo * countPerPage;

        if(pageEndNo >= totalPageCount){
            pageEndNo = totalPageCount == 0 ? 1 : totalPageCount;
        }






    }


    private int calculateTotalPageCount(int totalRecordCount, int countPerPage){
        int totalPageCount = 0;

        if(totalRecordCount > 0){
            totalPageCount = totalRecordCount / countPerPage;

            if( (totalRecordCount %  countPerPage) > 0){
                totalPageCount++;
            }            

        }

        return totalPageCount;
    }

}
